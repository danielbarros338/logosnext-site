pipeline {
    agent any

    environment {
        GIT_BRANCH          = "${env.BRANCH_NAME ?: 'main'}"
        PROD_HOST           = 'logosnext.com.br'
        PROD_USER           = 'root'
        SSH_CREDENTIALS     = 'ssh-prod-server'
        REMOTE_APP_DIR      = '/logosnext-site'
    }

    stages {
        stage('Install & Verify') {
            agent {
                docker { 
                    image 'node:20-alpine' 
                    reuseNode true
                }
            }
            steps {
                sh 'npm ci'
                sh 'npm run lint'
                sh 'npm run build'
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                sshagent(credentials: [SSH_CREDENTIALS]) {
                    // Cria o diretório remoto se não existir
                    sh "ssh -o StrictHostKeyChecking=no ${PROD_USER}@${PROD_HOST} 'mkdir -p ${REMOTE_APP_DIR}'"
                    
                    // Copia os arquivos do projeto para o servidor
                    // Exclui pastas pesadas ou desnecessárias, pois o build será feito no Docker remoto
                    sh """
                        rsync -avz --delete \
                        --exclude 'node_modules' \
                        --exclude '.git' \
                        --exclude '.next' \
                        --exclude '.env' \
                        ./ ${PROD_USER}@${PROD_HOST}:${REMOTE_APP_DIR}
                    """
                    
                    // Executa o deploy remoto usando Docker Compose
                    sh """
                        ssh -o StrictHostKeyChecking=no ${PROD_USER}@${PROD_HOST} '
                            cd ${REMOTE_APP_DIR}
                            docker compose down
                            docker compose up -d --build
                        '
                    """
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}