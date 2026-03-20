# uuid

- problem??
  to verify token we have to make a db call everytime and
  it does not have expiry

# solution is JWT

# JWT

- json web token
- 3 parts (header,payload,signature)
- it comes with expiry we can set also
- header and paylod is converted into Base64Url-encoded,
- signature is the secret key we decide,Usually created using a secret key (HMAC) or a private key (RSA/ECDSA) depending on the algorithm.
- JWT is encoded, not encrypted
- header -> key:value -> type and signing algo(HS256, RS256)
- JWTs are not encrypted by default, only encoded. Anyone can decode the payload to read it. To make it secret, you’d need JWE (JSON Web Encryption).
- 2 methods => sign and verify. (secret key)

