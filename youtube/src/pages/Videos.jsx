import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import axios from 'axios';


export default function Videos() {
    const { keyword } = useParams();
    const {
        isLoding,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["videos", keyword], // 배열의 형태로 지정.
        queryFn: async () => {
            return axios
            .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
            .then((res) => res.data.items);
        },
    });

    return (
      <>
        <div>
          Videos {keyword ? `${keyword}` : "🔥🔥🔥🔥🔥"}
          {/* keyword가 존재 한다면 keyword에 관한 리스트를, 없다면 🔥🔥🔥🔥🔥을 보여준다 */}
        </div>

        {isLoding && <p>Loding...</p>}
        {error && <p>에러가 발생했다! 🤔</p>}
        {videos && (
            <ul>
                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </ul>
        )}
      </>
    );
}