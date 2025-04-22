pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
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
                    sh 'docker run -d -p 8080:80 --name frontend-container my-frontend-app'
                }
            }
        }
    }
}
