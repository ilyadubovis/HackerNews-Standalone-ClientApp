import { NewsStory } from "../../app/models/news-story";

export const MockNewsIds: string[] =
[
    '123', '456'
];

export const MockNewsStories: NewsStory[] = 
[
    {
        id: '123',
        title: 'news story 123',
        type: 'type 1',
        time: Number(Date.now),
        url: 'http://www.abc.com',
        by: 'John Doe',
        descendants: 0,
        score: 123
    },
    {
        id: '456',
        title: 'news story 456',
        type: 'type 2',
        time: Number(Date.now),
        url: 'http://www.def.com',
        by: 'Jane Doe',
        descendants: 0,
        score: 456
    }
];

