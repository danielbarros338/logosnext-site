pipeline {
  agent any

  environment {
    GIT_BRANCH          = "${env.BRANCH_NAME} ?: 'main'"
    PROD_HOST           = 'logosnext.com.br'
    PROD_USER           = 'root'
    SSH_CREDENTIALS     = 'ssh-prod-server'
    REMOTE_APP_DIR      = '/logosnext-site'
    DOCKER_IMAGE        = 'node:20-alpine'
  }

  // TODO: continuar o desenvolvimento
}