# Tutorials about Openshift
## Deploying a simple application to an Openshift Cluster
The folder simple-nodejs-app contains a nodejs application based on express.js framework.
When deployed, the API of the application would be available on those two endpoints :
 - /home
 - /login

Deploy the simple nodejs application on an openshift cluster :

```shell
$ oc new-app --as-deployment-config --name simple https://github.com/fouscou/openshift-tutorial.git#master --context-dir simple-nodejs-app
```

Follow the build configuration log file :

```shell
$ oc logs -f bc/simple
```

Check that there is a new deployment created :

```shell
$ oc status
```
Check the status of the pods :

```shell
$ oc get pod
```

Expose the application to access it outside of the cluster :

```shell
$ oc expose svc/simple
```

Get the host of the route :

```shell
$ oc get route
```
