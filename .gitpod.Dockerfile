FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 5 \
    && nvm use 5 \
    && nvm alias default 5"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
