import { useState, useEffect } from "react";
import getReviewData from "../../helpers/getReviewData";
import { EmptyStar } from "../Star/EmptyStar";
import { HalfStar } from "../Star/HalfStar";
import { Star } from "../Star/Star";
import { Box, Progress, Stack, Text } from '@chakra-ui/react'
import theme from "../../theme";
import { StarsCollection } from "../StarsCollection/StarsCollection";

export const ReviewData = ({ prodId, prodTitle, setProdReview }) => {

    const [reviews, setReview] = useState([]);

    let numberOfStars = (reviews.rating_average)
    let total = reviews.paging?.total

    useEffect(() => {
        getReviewData(prodId, setReview)
        setTimeout(() => {
            setProdReview({
                numberOfStars: reviews?.rating_average,
                total: reviews.paging?.total
            });
            console.log(reviews)
        }, 2000)
    }, [])

    return (
        <>
            {
                reviews.paging?.total === 0 ? null
                    :
                    <div className="opinions-section">
                        <h2 className="opinion-title">Opiniones sobre {prodTitle}</h2>
                        <Box className='opinions-rating' alignItems='center'>
                            <div className='general-opinion'>
                                <p>{reviews.rating_average}</p>
                                <StarsCollection starsAmount={numberOfStars} />
                                <span>{reviews.paging?.total === undefined ? `` : `Promedio entre ${reviews.paging?.total} opiniones`}</span>
                            </div>
                            <div className='stars-opinion'>
                                <Box margin="0 auto" textAlign="center" width="100%">
                                    <Stack justifyContent='center' align='center' direction="row" marginBottom="4px">
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px'>
                                            5 estrellas
                                        </Text>
                                        <Progress colorScheme={theme.components.Progress.baseStyle.filledTrack} borderRadius={2} size="xs" width="14rem" value={(100 * reviews.rating_levels?.five_star) / total} />
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px' paddingLeft="9px" textAlign='start'>
                                            {reviews.rating_levels?.five_star}
                                        </Text>
                                    </Stack>
                                    <Stack justifyContent='center' align='center' direction="row" marginBottom="4px">
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px'>
                                            4 estrellas
                                        </Text>
                                        <Progress colorScheme={theme.colors.blue} borderRadius={2} size="xs" width="14rem" value={(100 * reviews.rating_levels?.four_star) / total} />
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px' paddingLeft="9px" textAlign='start'>
                                            {reviews.rating_levels?.four_star}
                                        </Text>
                                    </Stack>
                                    <Stack justifyContent='center' align='center' direction="row" marginBottom="4px">
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px'>
                                            3 estrellas
                                        </Text>
                                        <Progress colorScheme={theme.colors.blue} borderRadius={2} size="xs" width="14rem" value={(100 * reviews.rating_levels?.three_star) / total} />
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px' paddingLeft="9px" textAlign='start'>
                                            {reviews.rating_levels?.three_star}
                                        </Text>
                                    </Stack>
                                    <Stack justifyContent='center' align='center' direction="row" marginBottom="4px">
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px'>
                                            2 estrellas
                                        </Text>
                                        <Progress colorScheme={theme.colors.blue} borderRadius={2} size="xs" width="14rem" value={(100 * reviews.rating_levels?.two_star) / total} />
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px' paddingLeft="9px" textAlign='start'>
                                            {reviews.rating_levels?.two_star}
                                        </Text>
                                    </Stack>
                                    <Stack justifyContent='center' align='center' direction="row" marginBottom="4px">
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px' textAlign='start' ms='2px'>
                                            1 estrella
                                        </Text>
                                        <Progress colorScheme={theme.colors.blue} borderRadius={2} size="xs" width="14rem" value={(100 * reviews.rating_levels?.one_star) / total} />
                                        <Text color='rgba(0,0,0,.55)' fontSize="md" m='0' w='75px' paddingLeft="9px" textAlign='start'>
                                            {reviews.rating_levels?.one_star}
                                        </Text>
                                    </Stack>
                                </Box>
                            </div>
                        </Box>
                        <div className="opinions-written">
                            {
                                reviews.reviews?.map((review) => {
                                    return (
                                        <div className="clients-review" key={review.id}>
                                            <div className="client-stars">
                                                {
                                                    review.rate >= 1 ? <Star /> : <EmptyStar />
                                                }
                                                {
                                                    review.rate >= 2 ? <Star /> : <EmptyStar />
                                                }
                                                {
                                                    review.rate >= 3 ? <Star /> : <EmptyStar />
                                                }
                                                {
                                                    review.rate >= 4 ? <Star /> : <EmptyStar />
                                                }
                                                {
                                                    review.rate >= 5 ? <Star /> : <EmptyStar />
                                                }
                                            </div>
                                            <h3>{review.title}</h3>
                                            <p>{review.content}<span>{review.date_created.slice(0, 10)}</span></p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </>
    )
}