# This file is used for convenience of local development.
# DO NOT STORE YOUR CREDENTIALS INTO GIT
export POSTGRES_USERNAME=kynk
export POSTGRES_PASSWORD=Password1
export POSTGRES_HOST=database-430131214789.ccdjk7bcff3c.us-east-1.rds.amazonaws.com
export POSTGRES_DB=uda_db
export AWS_BUCKET=arn:aws:s3:::my-bucket-430131214789
export AWS_REGION=us-east-1
export AWS_PROFILE=default
export JWT_SECRET=testing
export URL=http://localhost:8100
export DOCKER_PASSWORD=P@ssword1
export DOCKER_USERNAME=kynkdev

# bucket policy
# {
# "Version":"2012-10-17",
# "Statement":[
#   {
#       "Sid":"Stmt1625306057759",
#       "Principal":"*",
#       "Action":"s3:*",
#       "Effect":"Allow",
#       "Resource":"arn:aws:s3:::my-bucket-430131214789"
#   }
# ]
# } 

# test connection : psql -h database-430131214789.ccdjk7bcff3c.us-east-1.rds.amazonaws.com -U kynk1 postgres
