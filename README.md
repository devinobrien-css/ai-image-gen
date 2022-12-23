# ARTi

## Requirements

This project requires:

```
AWS cli(for profiles)
AWS SAM cli
Nodejs 18.x
```

## Deployment

### API Deployment

Ensure you have an IAM user with programmatic access(currently `arti-deployer`). If you do not already have an access key, create one and add it to your `.aws/credentials` file as a profile.

Once you have the profile saved, navigate to the `./sam` directory. You will need to run the following two commands:

```
sam build
sam deploy -g --profile [profile]
```

Answer any prompts SAM asks. For first time deployment, you may specify any stack name and region, these will override the `samconfig.toml` file provided.

### Site Deployment

After the API has been successfully deployed for the first time, you will need to retrieve the proper API URI in order for the client to make the proper network requests. This can retrieved through the API Gateway service -> [name of API Gateway] -> Stages -> Prod/image POST. This value can overwrite the existing `VITE_API_URL` value in `./client/.env.production`.

If a CI/CD pipeline has already been setup to deploy to an S3 Bucket, simply push/merge this change into the branch that workflow is based on.

If a CI/CD pipeline does not exist yet, simply run the command `npm run build` in the `./client` directory, this will build the site into the `./client/dist` directory. Once the build is complete, you may copy the contents of the `./client/dist` folder into an S3 Bucket.

Ensure that `Static website hosting` is enabled in the site S3 Bucket. If this deployment is meant to be public, ensure `Public` permissions have been granted as well.

If the bucket is being setup for the first time, you will also need to setup a `Bucket policy` like:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::[Bucket Name]/*"
        }
    ]
}
```

Once the site has been deployed to the S3 Bucket, you will need to modify the `./sam/template.yml` and `./sam/image/app.mjs` files and redeploy the API. This redeployment won't change the resulting API URI.