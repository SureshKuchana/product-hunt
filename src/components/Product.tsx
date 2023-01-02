import {
  Box,
  Flex,
  Image,
  Link,
  createIcon,
  Stack,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { Products } from '../types';

const SortUp = createIcon({
  displayName: 'SortUp',
  path: (
    <>
      <path fill="#4183C4" d="M0 192L160 32 320 192v32H0V192z" />
    </>
  ),
  viewBox: '0 0 320 512',
});

const SortDown = createIcon({
  displayName: 'SortDown',
  path: (
    <>
      <path fill="#4183C4" d="M0 320L160 480 320 320V288H0v32z" />
    </>
  ),
  viewBox: '0 0 320 512',
});

type ProductProps = Products & {
  upVote: (productId: number) => void;
  downVote: (productId: number) => void;
};

const Product = ({
  id,
  title,
  description,
  url,
  votes,
  submitterAvatarUrl,
  productImageUrl,
  upVote,
  downVote,
}: ProductProps) => {
  const handleUpVote = () => {
    upVote(id);
  };
  const handleDownVote = () => {
    downVote(id);
  };

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      key={id}
    >
      <Image
        alt="img"
        src={productImageUrl}
        boxSize="150px"
        objectFit="cover"
        mr={8}
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="center"
        align="flex-start"
        flexDirection={'column'}
      >
        <Stack direction={'row'} alignItems={'center'} mb={2}>
          <Stack direction={'column'}>
            <IconButton
              boxSize={'2'}
              background={'transparent'}
              _hover={{
                background: 'transparent',
              }}
              _active={{
                background: 'transparent',
              }}
              fontSize="20px"
              aria-label="Sort up"
              onClick={handleUpVote}
              icon={<SortUp />}
            />
            <IconButton
              boxSize={'2'}
              background={'transparent'}
              _active={{
                background: 'transparent',
              }}
              fontSize="20px"
              aria-label="Sort down"
              onClick={handleDownVote}
              _hover={{
                background: 'transparent',
              }}
              icon={<SortDown />}
            />
          </Stack>
          <Text fontWeight={'bold'}>{votes}</Text>
        </Stack>
        <Box>
          <Link
            sx={{
              color: '#1e70bf',
            }}
            _hover={{
              textDecoration: 'none',
            }}
            href={url}
          >
            {title}
          </Link>
          <Text fontSize="sm" isTruncated>
            {description}
          </Text>
        </Box>
        <Box display="flex" alignItems={'center'}>
          <span
            style={{
              color: '#0006',
              marginRight: 10,
            }}
          >
            Submitted by:
          </span>
          <Image
            objectFit={'cover'}
            borderRadius="full"
            boxSize="35px"
            alt="img"
            src={submitterAvatarUrl}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Product;
