# Microservices with Node JS and React

## by Stephen Grider on Udemy

Completed on: September 22nd 2022

Udemy Certificate: [Link](https://www.udemy.com/certificate/UC-c5c6f3ef-99a5-4b7c-b2fd-fb6b707c29b2/)

---

## Prod Setup

### Pre Requisites

1. Ensure `doctl` is installed. This can be done through homebrew.
1. Install `docker`. This can be done through homebrew.

### Steps

1. Create a Cluster on Digital Ocean called `ticketing`. You will need to use droplets with at least 4gb of Memory to avoid issues.
1. Once finished setting up, add the context to your local with: `doctl kubernetes cluster kubeconfig save ticketing`
1. Install `ingress-nginx` on the cluster with: `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.1/deploy/static/provider/do/deploy.yaml`. More info [here](https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean)
1. Add the Cluster Secrets which at the time of writing only consist of `JWT_KEY` and `STRIPE_KEY`. This can be done with: `kubectl create secret generic <jwt | stripe>-secret --from-literal=<key>=<secret>`
1. Create a change to trigger workflow on this repo which should deploy all services to the cluster.
1. Head to `Networking` tab on Digital Ocean and ensure Load Balancer is set up and working.
1. Find the public facing ip on this page (note that heading to this ip will result in a nginx 404 error).
1. Head to `Networking / Domain` tab on Digital Ocean.
1. Add an `A` name pointing to the IP of your load Balancer.
1. Add a `CNAME Record` with a host of `www` as an alias of your domain name. (If your domain is not `ticketing.jasoncrout.com` then ensure all instances of this within the monorepo are changed to the new domain name).
1. Heading to your domain name should now present you with the Ticketing Project!
