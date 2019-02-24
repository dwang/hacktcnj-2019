import boto3

def convert_image_to_bytes(image_name):
    with open(image_name, 'rb') as image_file:
        return image_file.read()


def get_labels(image_name):
    client = boto3.client('rekognition')

    response = client.detect_labels(
        Image={
            'Bytes': convert_image_to_bytes(image_name)
        },
        MaxLabels=1
    )

    print(response['Labels'][0]['Name'])
    return response['Labels'][0]['Name']


if __name__ == "__main__":
    get_labels("example.png")
