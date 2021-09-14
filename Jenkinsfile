def imageName = "calvinrahmat/backend:dev"
def builderImage


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
        stage('Build Image') {
            steps {
                script {
                    builderImage = docker.build("${imageName}")
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
        stage('Push image') {
            steps {
                script{
                    builderImage.push()
                }
            }
        }
         stage('Deploy') {
            steps {
                script{
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'develop',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: "docker-compose.yaml",
                                        execCommand: "docker-compose --compatibility up -d",
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}
