# Docker

Docker is used to make application platform independent.
Docker is a tool designed to make it easier to deploy and run applications by using containers.
Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it a all out as a package.



Docker compose is a tool for running multi container docker application 

Docker images are templates used to create Docker containers
Container is a running instance of image
## Docker Commands

### docker info
will list number images,running container,etc.
```shell
docker info
```

### Pull images from docker hub
We can pull images from docker hub.
```shell
docker pull ubuntu
```

### List docker images
```shell
docker images
```

### List running containers
```shell
docker ps
```

### List all containers

```shell
docker ps -a
```

### Run docker image
If image is not present in the system docker tries to pull the image from docker hub and run the image
```shell
docker run image-id
```

### Remove one or more images
```shell
docker rmi image-id
```

### Get inside container
```shell
docker run -it ubuntu
```

### Starting docker container
```shell
docker start container-id
```

### Stoping a docker container
```shell
docker stop container-id
```

### Info about running containers
```shell
docker stats
```

### Check disk usage of docker
```shell
docker system df
```

### docker system prune
It is used to remove all the dangling images(images not used by any conatiner)
```shell
docker system prune -a
```

### list only image id of docker image
```shell
docker images -q
```

### List only dangling images
it will remove non dangling images form list
```shell
docker images -f "dangling=false"
```

### Inspect an image
it will give info about your image.
```shell
docker inspect image
```

## Docker contianers
COntainers are running instances of docker images.

```shell
#start a container
docker start conatinerId/Name

# stop a docker container
docker stop containerName/Id

# pause a container
docker pause conatinerName/Id

#unpause a container
docker unpause containerName/Id

# to see top process of particular container
docker top conatinerName/Id

# to see stats of running container
docker stat containerName/Id

# to attach running container in your terminal
docker attach containerName/Id

# to kill running container
docker kill containerName/Id

# to remove non-running containers
docker rm containerName/Id


```