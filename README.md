# Welcome to 2022 Sample Application with Kubernetes Autoscaling

This project demonstrates how to deploy a sample application that prints "Welcome to 2022" along with user agent info using Kubernetes. The application is containerized using Docker and deployed on Azure Kubernetes Service (AKS). Autoscaling is implemented using Horizontal Pod Autoscaler (HPA), and Azure Load Balancer is used to expose the application externally.

## Features

- Sample application that prints "Welcome to 2022" and user agent info.
- Dockerized application for easy deployment.
- Kubernetes Deployment and Service configurations for deploying the application on AKS.
- Horizontal Pod Autoscaler (HPA) for automatic scaling based on CPU utilization.
- Integration with Azure Kubernetes Service (AKS) and Azure Load Balancer for external access.
- Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins.
- Version control using Git for managing the source code.
- Code quality analysis using SonarQube for identifying and fixing code smells.

## Technologies Used

- Programming Language: [Specify the programming language used]
- Containerization: Docker
- Orchestration: Kubernetes
- Cloud Provider: Microsoft Azure
- CI/CD: Jenkins
- Version Control: Git
- Code Quality Analysis: SonarQube

## Project Structure

- **`/app`**: Contains the source code for the sample application.
- **`/deployment`**: Contains Kubernetes Deployment, Service, and HPA configurations.
- **`/jenkins`**: Contains Jenkinsfile for CI/CD pipeline configuration.
- **`/sonarqube`**: Contains SonarQube configuration files and analysis reports.
- **`/docs`**: Contains documentation and project-related resources.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/welcome-to-2022.git`
2. Navigate to the project directory: `cd welcome-to-2022`
3. Set up your Azure account and create an AKS cluster.
4. Modify Kubernetes configuration files in the `/deployment` directory to match your AKS cluster settings.
5. Configure Jenkins pipeline with the Jenkinsfile provided in the `/jenkins` directory.
6. Integrate SonarQube with your CI/CD pipeline and configure analysis settings.
7. Trigger the CI/CD pipeline to deploy the application on AKS and verify autoscaling functionality.
8. Access the application using the Azure Load Balancer endpoint.

## License

This project is licensed under the [MIT License](LICENSE).
