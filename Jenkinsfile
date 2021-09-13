def imageName = "calvinrahmat/backend:dev"


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
         stage('Building image') {
            steps {
                script{
                    builderImage = docker.build('${imageName)')
                }
            }
        }
        stage('Testing image') {
            steps {
                script{
                    builderImage.inside {
                        sh 'echo test image success'
                    }
                }
            }
        }
    }
}
