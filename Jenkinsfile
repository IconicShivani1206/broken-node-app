pipeline {
    agent any

    environment {
        NODE_VERSION = '14'
    }

    stages {


        node {
    stage('Checkout SCM') {
        steps{
        checkout scm: [$class: 'GitSCM', branches: [[name: '**/main']], userRemoteConfigs: [[url: 'https://github.com/IconicShivani1206/broken-node-app']]]
    }
    }
    
    

    stage('Checkout Code') {  // If you have a second checkout step
    steps{
        checkout scm: [$class: 'GitSCM', branches: [[name: '**/main']], userRemoteConfigs: [[url: 'https://github.com/IconicShivani1206/broken-node-app.git']]] // Consistent .git or no .git
    }
    }

        stage('Install Dependencies') {
            steps {
                // Install node modules
                sh 'npm install'
            }
        }

        stage('Run Lint') {
            steps {
                // Run linter to check code style
                sh 'eslint app.js' // ❌ Will fail if eslint is not installed or app.js has errors
            }
        }

        stage('Run Tests') {
            steps {
                // Run unit tests
                sh 'npm test' // ❌ Will fail if tests fail
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build docker image
                sh 'docker build -t broken-app .' // ❌ Will fail if Dockerfile has issues
            }
        }

        stage('Deploy to Production') {
            steps {
                // Run deployment script
                sh './deploy.sh' // ❌ This script doesn't exist — will trigger failure
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed!'
        }
        success {
            echo '✅ Build succeeded!'
        }
    }
}
