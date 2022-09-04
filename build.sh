commit=$(git rev-parse --short HEAD)
docker build -t registry.cn-shanghai.aliyuncs.com/aqiu/blog .
docker tag registry.cn-shanghai.aliyuncs.com/aqiu/blog registry.cn-shanghai.aliyuncs.com/aqiu/blog:"${commit}"
#docker run -d -p 8080:8080 --name blog registry.cn-shanghai.aliyuncs.com/aqiu/blog:"${commit}"
echo "registry.cn-shanghai.aliyuncs.com/aqiu/blog:${commit}"
docker push registry.cn-shanghai.aliyuncs.com/aqiu/blog:"${commit}"
