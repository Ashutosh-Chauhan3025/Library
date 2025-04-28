pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = 'devops'               // Your Jenkins credential ID for DockerHub
        IMAGE_NAME = 'ashutosh2517/my-frontend-app'     // Full image name
        CONTAINER_NAME = 'my-frontend-app'           // Container name
    }

    triggers {
        githubPush()
    }

    stages {

        stage('Build Docker Image') {
            steps {
                script {
                   def dockerImage = docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker run -d -p 8081:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    withDockerRegistry([credentialsId: DOCKERHUB_CREDENTIALS, url: '']) {
                        dockerImage.push()
                    }
                }
            }
        }
    }

    post {
        always {
            sh "docker stop ${CONTAINER_NAME} || true"
            sh "docker rm ${CONTAINER_NAME} || true"
        }
    }
}

