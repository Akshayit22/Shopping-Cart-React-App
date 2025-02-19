pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'akshaytelang395/webapp-jenkins-build:latest'
        DOCKER_CREDENTIALS = 'docker-hub-credentials'  // Jenkins Credentials ID
        GIT_REPO = 'https://github.com/Akshayit22/Shopping-Cart-React-App.git'
        BRANCH_NAME = 'master'
    }

    stages {
        stage('Clone Repository') {
            steps {
                deleteDir() // Clean the workspace before cloning
                checkout scmGit(branches: [[name: '*/master']], 
                    userRemoteConfigs: [[url: "${GIT_REPO}"]])
            }
        }

        stage('Verify Files') {
            steps {
                sh 'ls -la'
                sh 'cat package.json'
            }
        }

        stage('Build React App') {
            steps {
                sh 'echo building'
                // sh 'npm install'
                // sh 'npm run build'
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