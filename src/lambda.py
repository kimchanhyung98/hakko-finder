import json
import urllib3

def lambda_handler(event, context):
    try:
        # Chzzk API parameters
        api_url = 'https://api.chzzk.naver.com/service/v1/lives?sortType=LATEST'
        user_count = event.get('concurrentUserCount', None)
        live_id = event.get('liveId', None)

        if user_count is not None and live_id is not None:
            api_url += f'&concurrentUserCount={user_count}&liveId={live_id}'

        # Use built-in functions instead of installing requests module
        http = urllib3.PoolManager()
        request = http.request('GET', api_url).data.decode('utf-8')
        response = json.loads(request)

    except Exception as e:
        response = {'error': str(e)}

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(response)
    }
