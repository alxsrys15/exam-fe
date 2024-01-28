import { RouterInput, trpc } from '@/utils/trpc';
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Text,
  TextInput,
  Title,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '../referral.module.css';
import { useRouter } from 'next/router';
type ReferralCreateInput = RouterInput['referral']['create'];

export default function HomePage() {
  const router = useRouter();
  const form = useForm<ReferralCreateInput>({
    initialValues: {
      given_name: '',
      email: '',
      surname: '',
      phone: '',
      house_number: '',
      street_name: '',
      suburb: '',
      state: '',
      post_code: 0,
      country: '',
    },
    validate: {
      given_name: val => (!val ? 'This field is required' : null),
      email: val => (!val ? 'This field is required' : null),
      surname: val => (!val ? 'This field is required' : null),
      phone: val => (!val ? 'This field is required' : null),
      house_number: val => (!val ? 'This field is required' : null),
      street_name: val => (!val ? 'This field is required' : null),
      suburb: val => (!val ? 'This field is required' : null),
      state: val => (!val ? 'This field is required' : null),
      post_code: val => (!val ? 'This field is required' : null),
      country: val => (!val ? 'This field is required' : null),
    },
    transformValues(values) {
      return {
        ...values,
        post_code: Number(values.post_code),
      };
    },
  });

  const referralMutation = trpc.referral.create.useMutation({
    onError(error) {
      if (error.message) {
        JSON.parse(error.message).map((err: any) => {
          form.setFieldError(err.validation, err.message);
        });
      }
    },
    onSuccess() {
      router.push('/referrals');
    },
  });

  const handleSubmit = (values: ReferralCreateInput) => {
    referralMutation.mutate(values);
  };

  return (
    <Box p={{ base: rem(16) }}>
      <Title>Referral Builder</Title>
      <Text
        styles={{
          root: {
            fontWeight: 700,
            color: 'gray',
          },
        }}
        mb={8}
        mt={16}
      >
        PERSONAL DETAILS
      </Text>
      <Divider />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="Given Name"
              {...form.getInputProps('given_name')}
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="Surname"
              {...form.getInputProps('surname')}
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="email"
              {...form.getInputProps('email')}
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="phone"
              {...form.getInputProps('phone')}
              withAsterisk
            />
          </Grid.Col>
        </Grid>
        <Text
          styles={{
            root: {
              fontWeight: 700,
              color: 'gray',
            },
          }}
          mb={8}
          mt={16}
        >
          ADDRESS
        </Text>
        <Divider />
        <Grid mt={16}>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="home name or #"
              {...form.getInputProps('house_number')}
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="street"
              {...form.getInputProps('street_name')}
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="suburb"
              {...form.getInputProps('suburb')}
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="state"
              {...form.getInputProps('state')}
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="postcode"
              {...form.getInputProps('post_code')}
              withAsterisk
              type="number"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput
              label="country"
              {...form.getInputProps('country')}
              withAsterisk
            />
          </Grid.Col>
        </Grid>
        <Group grow mt={24}>
          <Button variant="outline" size="md" className={classes.button}>
            Upload Avatar
          </Button>
          <Button
            color="green"
            size="md"
            className={classes.button}
            type="submit"
            loading={referralMutation.isPending}
          >
            Create Referral
          </Button>
        </Group>
      </form>
    </Box>
  );
}
