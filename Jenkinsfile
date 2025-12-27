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
          when {
              branch 'main'
          }
          steps {
              sshagent(credentials: [SSH_CREDENTIALS]) {
                  sh """
                      ssh -o StrictHostKeyChecking=no ${PROD_USER}@${PROD_HOST} '
                          cd /root/logosnext-site
                          docker compose up -d --build --force-recreate
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