FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 5.7.0 \
    && nvm use 5.7.0 \
    && nvm alias default 5.7.0"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

RUN bash -c "npm install -g typescript@1.8.2 lite-server@1.3.4"
