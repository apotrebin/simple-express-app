pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'echo "build"'
        slackSend()
      }
    }
  }
  environment {
    justTest = 'anyKindOfValue'
  }
}