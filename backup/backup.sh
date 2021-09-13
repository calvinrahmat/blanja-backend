#!/bin/sh

# BACKUP DATABASE

DB_USERS=calvin
DB_HOST=localhost
DB_NAME=product
DB_PASS=grand312

PullDb () {
export PGPASSWORD="$DB_PASS"
pg_dump -F t -h $DB_HOST -U $DB_USERS $DB_NAME > /home/calvin-ubuntu/backup_db/"database-$(date +%Y-%m-%d)".backup
unset PGPASSWORD
}

ZipFile(){
        gzip /home/calvin-ubuntu/backup_db/"database-$(date +%Y-%m-%d)".backup
}

DeleteFile(){
find . -type f -iname '*.backup.gz' -ctime +1
}

echo "Pulling Database..."
FILE=/home/calvin-ubuntu/backup/$(date +$Y-%m-%d)
PullDb
ZipFile
echo "Pull Complete"

echo "Clearing old backups"
DeleteFile
echo "Clearing Complete"


# BACKUP LOGS

backup_files="/home/calvin-ubuntu/Arkademy/Tugas/Blanja/blanja/server/logs"

# Where to backup to.
dest="/home/calvin-ubuntu/backup_db"

# Create archive filename.
date=$(date +%Y-%m-%d)
hostname=$(hostname -s)
archive_file="service_logs-$date.tgz"

# Print start status message.
echo "Backing up $backup_files to $dest/$archive_file"
date
echo

# Backup the files using tar.
tar czf $dest/$archive_file $backup_files

# Print end status message.
echo
echo "Backup finished"
date

# Long listing of files in $dest to check file sizes.
ls -lh $dest

