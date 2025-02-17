import { MagnifyingGlass } from '@phosphor-icons/react';
import { IconButton, RecentSearchButton } from '../../ui';
import { Container, Nav, PopularList, PopularListContainer, RecentKeywords, SearchBar, Section } from './style';
import BottomNavigation from '../../common/bottomnavigation';
import { useState } from 'react';

const Search = () => {
    const popularSearches = [
        '이혼숙려캠프',
        '원경',
        '명탐정 코난 2025(자막)',
        '짱구는 못말려 24',
        '놀라운 토요일',
        '스터디그룹',
        '나 혼자 산다',
        '선재 업고 튀어',
        '유 퀴즈 온 더 블럭',
        '커플팰리스',
    ];

    const [recentSearches, setRecentSearches] = useState([
        '또 오해영',
        '나 혼자 산다',
        '런닝맨',
        '위키드',
        '너의 이름은',
        '환승연애',
    ]);

    const firstHalf = popularSearches.slice(0, 5);
    const secondHalf = popularSearches.slice(5);

    const handleRemove = (searchText) => {
        setRecentSearches(recentSearches.filter((text) => text !== searchText));
    };

    return (
        <Container>
            <div className='inner'>
                <SearchBar>
                    <div className='input-container'>
                        <input type='text' placeholder='제목, 장르, 배우로 검색해보세요.' />
                        <IconButton
                            className='search-icon gray40 none'
                            icon={<MagnifyingGlass size={24} />}
                            text='MagnifyingGlass'
                        />
                    </div>
                </SearchBar>

                <Nav aria-label='최근 검색어'>
                    <h2>최근 검색어</h2>
                    <RecentKeywords>
                        {recentSearches.map((text) => (
                            <RecentSearchButton key={text} text={text} onRemove={handleRemove} />
                        ))}
                    </RecentKeywords>
                </Nav>

                <Section aria-labelledby='popular-searches'>
                    <h2 id='popular-searches'>실시간 인기 검색어</h2>

                    {/* 왼쪽 정렬 */}
                    <PopularListContainer>
                        <PopularList as='ol'>
                            {firstHalf.map((item, index) => (
                                <li key={index} className='left'>
                                    <span>{index + 1}</span>
                                    {item}
                                </li>
                            ))}
                        </PopularList>

                        {/* 오른쪽 정렬 */}
                        <PopularList as='ol'>
                            {secondHalf.map((item, index) => (
                                <li key={index} className='right'>
                                    <span>{index + 6}</span>
                                    {item}
                                </li>
                            ))}
                        </PopularList>
                    </PopularListContainer>
                </Section>
                <BottomNavigation />
            </div>
        </Container>
    );
};

export default Search;
