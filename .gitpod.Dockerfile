FROM gitpod/workspace-full-vnc

ENV CYPRESS_CACHE_FOLDER=/workspace/.cypress-cache

# Install Cypress dependencies.
RUN sudo apt-get update \
  && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  && sudo rm -rf /var/lib/apt/lists/*

# Install doctl
RUN wget https://github.com/digitalocean/doctl/releases/download/v1.94.0/doctl-1.94.0-linux-amd64.tar.gz \
  && tar xf doctl-1.94.0-linux-amd64.tar.gz \
  && mv doctl /usr/local/bin \
  && rm doctl-1.94.0-linux-amd64.tar.gz

USER gitpod

# Setup dev env
RUN npm install --global npm pnpm yarn && \
  # Uncomment to install global bit cli
  # SHELL=bash npx @teambit/bvm@latest install && \
  echo >> ${HOME}/.bashrc && \
  echo 'export PATH=$PATH:node_modules/.bin' >> ${HOME}/.bashrc
