#Hosting a static website via Github pages

## Configuring a Custom Domain

## Domain Registrar DNS settings / DNS Settings
My domain is registered with Squarspace (rip google domains)
You need to add the following records under DNS settings
What is A, AAAA and CNAME?

First add the IP address records, these are used to map hostnames to IP addresses.  
There are IP address record types, but the two that we care about are A and AAAA, these are records for IPv4 and IPv6 addresses.
Here are the values you need to add to the DNS records of your domain registrar. 

|Host|Type|Value|
|@|A|185.199.108.153|
|@|A|185.199.109.153|
|@|A|185.199.110.153|
|@|A|185.199.111.153|
|@|AAAA|2606:50c0:8000::153|
|@|AAAA|2606:50c0:8001::153|
|@|AAAA|2606:50c0:8002::153|
|@|AAAA|2606:50c0:8003::153|
