#!/bin/bash

. /home/${USER}/.nvm/nvm.sh
cd /home/${USER}/proxy_server && npm start >> /home/${USER}/proxy.log &2>1
