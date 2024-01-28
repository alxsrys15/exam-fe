import { DynamicTable, IColumnType } from '@/components/dynamic-table';
import { RouterOutput, trpc } from '@/utils/trpc';
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Group,
  Loader,
  rem,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';

type ReferralOutout = RouterOutput['referral']['one'];

const TableColumns: IColumnType<ReferralOutout>[] = [
  {
    key: 'id',
    title: 'Referral ID',
    show: false,
  },
  {
    key: 'given_name',
    title: 'Given Name',
    show: true,
  },
  {
    key: 'surname',
    title: 'Surname',
    show: true,
  },
  {
    key: 'email',
    title: 'Email',
    show: true,
  },
  {
    key: 'phone',
    title: 'phone',
    show: true,
  },
  {
    key: 'house_number',
    title: 'House Number',
    show: true,
  },
  {
    key: 'street_name',
    title: 'Street Name',
    show: true,
  },
  {
    key: 'suburb',
    title: 'Suburb',
    show: true,
  },
  {
    key: 'state',
    title: 'State',
    show: true,
  },
  {
    key: 'post_code',
    title: 'Post Code',
    show: true,
  },
  {
    key: 'country',
    title: 'Country',
    show: true,
  },
  {
    key: '',
    title: 'Actions',
    show: true,
    render: (_, item) => {
      return (
        <Group>
          <ActionIcon variant="transparent" color="gray" size="sm">
            <IconPencil />
          </ActionIcon>
          <ActionIcon variant="transparent" color="gray" size="sm">
            <IconTrash />
          </ActionIcon>
        </Group>
      );
    },
  },
];

const Referrals = () => {
  const referrals = trpc.referral.all.useQuery();

  return (
    <Box p={{ base: rem(16) }}>
      <Flex>
        <Button color="green" component={Link} href="/referrals/add">
          Add Referral
        </Button>
      </Flex>
      {referrals.isLoading ? (
        <Loader />
      ) : (
        <Box style={{ overflowX: 'auto' }}>
          <DynamicTable columns={TableColumns} data={referrals.data} />
        </Box>
      )}
    </Box>
  );
};

export default Referrals;
