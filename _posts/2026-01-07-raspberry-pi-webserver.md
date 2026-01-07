---
layout: post
title: Setting a raspberry pi as a webserver
---

# Get a static ip address

Use your router admin page to lease a static ip adress for your raspberry pi.

At my home, I can access this page through this url but it depends on your internet access provider:

```
http://192.168.1.1/
```

Then reboot the raspberry and check the adress

```shell
ip a
```

# Setup port forwarding

"When traffic arrives from the internet on port X, send it to my raspberry"

On your router admin page, setup port forwarding for HTTP (from port 80) and HTTPS (from port 443) protocols to my server port.

# Allow ports on raspberry

```shell
sudo ufw allow 80
sudo ufw allow 443
sudo ufw reload
```

# Get public ip

```shell
curl -4 ifconfig.me # ipv4
```

```shell
curl -6 ifconfig.me # ipv6
```

Check it

```shell
nc -zv <public-ip>
```

# Setup domain name server record

I bought a domain name registration to access my web server from internet.

To do that I declared a domain name server (DNS) "A" (for ipv4) record mapping my raspberry's public ip to my domain name.

**warning :** I declared a "AAA" (for ipv6) record but removed it because my web server was not setup for it.

# Next things to do ?

- SSL certificates
- Dynamic DNS record

# Docker network

```
docker network create proxy
```
