FROM kalilinux/kali-rolling

RUN apt update && apt install -y openssh-server sudo

RUN useradd -m vulnerableuser && echo "vulnerableuser:password123" | chpasswd

RUN sed -i 's/#\?PermitRootLogin .*/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    sed -i 's/#\?PasswordAuthentication .*/PasswordAuthentication yes/' /etc/ssh/sshd_config

RUN mkdir -p /var/run/sshd

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
