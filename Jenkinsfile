pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Ashutosh-Chauhan3025/Library.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('my-frontend-app')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker stop frontend-container || true'
                    sh 'docker rm frontend-container || true'
                    sh 'docker run -d -p 8081:80 --name frontend-container my-frontend-app'
                }
            }
        }
    }
}
