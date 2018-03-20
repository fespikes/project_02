# Transwarp Data Cloud 门户网站

## Dev

```bash
npm install # or yarn install
npm start
```

### Commands

生成国际化翻译文件

```bash
npm run i18n
```

### CI

制作image. 

```
docker build . -f ci/Dockerfile -t tdc/tdcweb-ci
docker tag tdc/tdcweb-ci 172.16.1.99/frontend/tdcweb/build/tdcweb-ci:latest
docker push 172.16.1.99/frontend/tdcweb/build/tdcweb-ci:latest
```
