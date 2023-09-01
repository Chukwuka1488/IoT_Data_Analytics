# OnyxCamp

### Introducing IoT Data Analytics

1. Creating the basic Express App using TypeScript
   1a. npm init -y
   1b. npm i express mongoose ejs
   1c. touch index.js
   1d. require express,


### Add the basic typescript application to Kubernetes

1. Containerize Your Application with Docker:

- Write a Dockerfile for your application:

```yaml
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "./dist/server.js"]
```

Make sure you have dist/server.js as the entry file after TypeScript transpilation.

- Build your Docker image:

```bash
docker build -t yourusername/express-backend .
```

- Push the Docker image to a container registry (e.g., Docker Hub, Google Container Registry, etc.):

```bash
docker push yourusername/express-backend
```
2. Create and Deploy an ImagePullSecret in Kubernetes:
- Write Kubernetes Manifests:
Create YAML files to define your deployments, services, etc. For a simple service, you might just need a deployment and a service.

- express-deployment.yaml:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: express-backend
spec:
  replicas: 2
  selector:
    matchLabels:
      app: express-backend
  template:
    metadata:
      labels:
        app: express-backend
    spec:
      containers:
      - name: express-backend
        image: yourusername/express-backend:latest
        ports:
        - containerPort: 3000
```
- express-service.yaml:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: express-backend-service
spec:
  selector:
    app: express-backend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
```
3. Deploy to Kubernetes:

First, ensure you have kubectl installed and configured to communicate with your cluster.

- Deploy your application:

```bash
kubectl apply -f express-deployment.yaml
```
- Expose your application with the service:

```bash
kubectl apply -f express-service.yaml
```
4. Access the Application:

- If you're using a cloud provider and created a LoadBalancer type service, you can get the external IP after some time:

```bash
kubectl get services
```
- Once the external IP is allocated, you can access the Express application using the external IP on port 80.

5. Further Considerations:

- Use ConfigMaps and Secrets in Kubernetes to handle configurations and sensitive information respectively.
- Set up persistent storage if your application needs to store data.
- Consider setting up Helm for package management in Kubernetes, which simplifies deploying and managing applications.
- Ensure you have logging and monitoring set up in your cluster.
- Investigate network policies, RBAC, and other security configurations.

```bash
kubectl port-forward pod/my-app-pod 8080:5000
```

