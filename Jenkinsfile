pipeline {
    agent any

    stages {
        stage('Installing packages') {
            steps {
                nodejs("node14"){
                    sh 'npm install'
                }
            }
             
        }
         stage('Running test') {
            steps {
                nodejs("node14"){
                    sh 'npm test'
                }
            }
             
        }
    }
}
