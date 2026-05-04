#!/bin/bash

# Pastikan script dijalankan sebagai root
if [ "$EUID" -ne 0 ]; then
  echo "Harap jalankan script ini sebagai root (gunakan sudo)"
  exit
fi

echo "================================================="
echo "   🚀 Memulai Setup VPS untuk Arvispro SaaS 🚀   "
echo "================================================="

# 1. Update dan Upgrade Sistem
echo -e "\n[1/6] Mengupdate sistem Ubuntu..."
apt update && apt upgrade -y

# 2. Install Tools Dasar, Nginx, dan Fail2ban
echo -e "\n[2/6] Menginstall Nginx, Git, Curl, dan Fail2ban..."
apt install -y curl git unzip nginx fail2ban

# 3. Install Docker dan Docker Compose
echo -e "\n[3/6] Menginstall Docker & Docker Compose..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com | sh
fi
apt install docker-compose -y

# Enable dan Start Docker
systemctl enable docker
systemctl start docker

# 4. Install Certbot untuk SSL/HTTPS
echo -e "\n[4/6] Menginstall Certbot untuk SSL..."
apt install certbot python3-certbot-nginx -y

# 5. Konfigurasi Firewall (UFW)
echo -e "\n[5/6] Mengonfigurasi UFW Firewall..."
# Memastikan OpenSSH diizinkan agar tidak terkunci dari luar
ufw allow OpenSSH
# Mengizinkan Nginx (HTTP & HTTPS)
ufw allow 'Nginx Full'
# Mengaktifkan Firewall (Yes otomatis)
yes | ufw enable

# Enable Fail2ban untuk perlindungan brute-force SSH
systemctl enable fail2ban
systemctl start fail2ban

# 6. Verifikasi Instalasi
echo -e "\n[6/6] Verifikasi Instalasi..."
echo "-------------------------------------------------"
docker --version
docker-compose --version
nginx -v
echo "UFW Status:"
ufw status
echo "-------------------------------------------------"

echo -e "\n✅ Setup VPS Selesai!"
echo -e "\nLangkah selanjutnya:"
echo "1. Clone repositori project ke /var/www/arvispro-client"
echo "2. Atur file konfigurasi Nginx di /etc/nginx/sites-available/"
echo "3. Jalankan 'certbot --nginx -d domainanda.com' untuk mengaktifkan HTTPS"
