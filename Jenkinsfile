pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'akshaytelang395/webapp-jenkins-build:latest'
        DOCKER_CREDENTIALS = 'docker-hub-credentials'  // Jenkins Credentials ID
        GIT_REPO = 'https://github.com/Akshayit22/Shopping-Cart-React-App.git'
        BRANCH_NAME = 'main'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${BRANCH_NAME}", url: "${GIT_REPO}"
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "$DOCKER_CREDENTIALS", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker rmi $DOCKER_IMAGE'
            }
        }
    }
}