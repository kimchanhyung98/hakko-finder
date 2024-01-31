import json
import requests


def lambda_handler(event, context):
    try:
        # Chzzk API parameters
        api_url = 'https://api.chzzk.naver.com/service/v1/lives?sortType=LATEST'
        user_count = event.get('concurrentUserCount', None)
        live_id = event.get('liveId', None)

        if user_count is not None and live_id is not None:
            api_url += f'&concurrentUserCount={user_count}&liveId={live_id}'

        response = requests.get(api_url).json()
    except Exception as e:
        response = {'error': str(e)}

    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
