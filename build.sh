#!/bin/bash
# Temporary
yarn build
docker build -t=zot.soh.re/math-quest:latest .
docker push zot.soh.re/math-quest:latest
kubectl delete pods --all -n math-quest-soh-re
