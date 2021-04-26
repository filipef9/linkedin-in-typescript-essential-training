FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 6 \
    && nvm use 6 \
    && nvm alias default 6"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
