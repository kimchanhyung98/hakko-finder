# Analyzing chzzk API
치지직 라이브 방송 목록 API
- https://api.chzzk.naver.com/service/v1/lives


## API structure
```json
// https://api.chzzk.naver.com/service/v1/lives?sortType=POPULAR

{
"code": 200,
"message": null,
"content": {
    "size": 30,
    "page": {
        "next": {
            "concurrentUserCount": 278,
            "liveId": 4232973
        }
    },
    "data": [
        {
            "liveId": 4234861,
            "liveTitle": "폰켓몬 파펭몽 오너",
            "liveImageUrl": "https://livecloud-thumb.akamaized.net/chzzk/livecloud/KR/stream/26464698/live/4234861/record/24625722/thumbnail/image_{type}.jpg",
            "defaultThumbnailImageUrl": null,
            "concurrentUserCount": 10756,
            "accumulateCount": 53066,
            "openDate": "2024-01-25 23:07:28",
            "adult": false,
            "categoryType": "GAME",
            "liveCategory": "Palworld",
            "liveCategoryValue": "팰월드",
            "channel": {
                "channelId": "75cbf189b3bb8f9f687d2aca0d0a382b",
                "channelName": "한동숙입니다",
                "channelImageUrl": "https://nng-phinf.pstatic.net/MjAyMzEyMTVfMTgx/MDAxNzAyNjAxMjEyMTYw.Hw6vs76aI0L1zeu4fziwXDE35gidFriwTSgAjq7KWxUg.0V3KaKvctGKcVYa76UiDVTXMjXeUSuUezHX6nGU4y9kg.PNG/123.png",
                "verifiedMark": false
            }
        },
        {
            "liveId": 4233906,
            "liveTitle": "용과같이 8  신작     스포주의 ",
            "liveImageUrl": null,
            "defaultThumbnailImageUrl": null,
            "concurrentUserCount": 7369,
            "accumulateCount": 62187,
            "openDate": "2024-01-25 20:06:38",
            "adult": true,
            "categoryType": "GAME",
            "liveCategory": "Like_a_Dragon_Infinite_Wealth",
            "liveCategoryValue": "용과 같이 8",
            "channel": {
                "channelId": "7ce8032370ac5121dcabce7bad375ced",
                "channelName": "풍월량월풍월량",
                "channelImageUrl": "https://nng-phinf.pstatic.net/MjAyMzEyMjBfNzgg/MDAxNzAyOTk5MDU4NTQ1.q74UANafs4egu_GflqIXrKZvqweabjdsqb3q7F-vEPEg.0DlZf3Myopu6ITUmTkOYLU-GKcBLotgKn61A0o9ZAN4g.PNG/7d354ef2-b2a8-4276-8c12-5be7f6301ae0-profile_image-600x600.png",
                "verifiedMark": false
            }
        },
    ...
```

## Filter
### viewer
```json
"data": [
    {
        ...,
        "concurrentUserCount": 10756,
        ...
```
시청자 수가 0~5명인 스트리머만 필터링하여 캐싱


### adult
```json
"data": [
    {
        ...,
        "adult": true,
        ...
```
연령 제한 스트리머 제외? 포함?


### category
```json
"data": [
    {
        ...,
        "adult": true,
        "categoryType": "GAME",
        "liveCategory": "Like_a_Dragon_Infinite_Wealth",
        "liveCategoryValue": "용과 같이 8",
        ...
```
카테고리 선택 (GAME, ETC, null(미설정))


## Next page?
1. next.concurrentUserCount&liveId를 파라미터로 전달 
    ```json
    // https://api.chzzk.naver.com/service/v1/lives?sortType=LATEST
    
    "next": {
        "concurrentUserCount": 2,
        "liveId": 4235063
    }
    ```
   
2. API 호출
    ```json
    // https://api.chzzk.naver.com/service/v1/lives?concurrentUserCount=2&liveId=4235063&sortType=LATEST
    
    "next": {
        "concurrentUserCount": 1,
        "liveId": 4235025
    }
    ```
   
3. 반복
    ```json
    // https://api.chzzk.naver.com/service/v1/lives?concurrentUserCount=1&liveId=4235025&sortType=LATEST
    
    "next": {
        "concurrentUserCount": 1,
        "liveId": 42...,
    }
    ```
