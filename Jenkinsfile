pipeline {
    agent any

    environment {
        GIT_BRANCH          = "${env.BRANCH_NAME ?: 'main'}"
        PROD_HOST           = 'logosnext.com.br'
        PROD_USER           = 'root'
        SSH_CREDENTIALS     = 'ssh-prod-server'
        REMOTE_APP_DIR      = '/root/logosnext-site'

        HOME                = '/tmp'
        NPM_CONFIG_CACHE    = '/tmp/.npm'
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
              sh '''
                  mkdir -p /tmp/.npm
                  npm ci
                  npm run lint
                  npm run build
              '''
          }
      }


        stage('Deploy to Production') {
          steps {
              sshagent(credentials: [SSH_CREDENTIALS]) {

                  sh """
                      ssh -o StrictHostKeyChecking=no ${PROD_USER}@${PROD_HOST} << 'EOF'
                      set -e
                      cd ${REMOTE_APP_DIR}

                      docker compose down
                      docker compose build --no-cache
                      docker compose up -d --force-recreate
                      EOF
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