pipeline {
    agent any

    stages {
        stage('Installing packages') {
            steps {
                nodejs("node14"){
                    sh 'npm install'
                }
            }
             steps {
                nodejs("node14"){
                    sh 'npm test'
                }
            }
        }
    }
}
