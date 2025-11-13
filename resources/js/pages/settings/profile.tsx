import { send } from '@/routes/verification';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Form } from '@wandry/inertia-form';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import SubmitButton from '@/components/submit-button';
import TextField from '@/components/text-field';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: route('profile.edit'),
    },
];

export default function Profile({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Profile information"
                        description="Update your name and email address"
                    />

                    <Form
                        action={route('profile.update')}
                        method="patch"
                        options={{
                            preserveScroll: true,
                        }}
                        defaultValues={auth.user}
                        className="space-y-6"
                    >
                        <>
                            <TextField
                                name="name"
                                label="Name"
                                required
                                autoComplete="name"
                                placeholder="Full name"
                            />
                            <TextField
                                name="email"
                                label="Email address"
                                required
                                autoComplete="username"
                                placeholder="Email address"
                            />

                            {mustVerifyEmail &&
                                auth.user.email_verified_at === null && (
                                    <div>
                                        <p className="-mt-4 text-sm text-muted-foreground">
                                            Your email address is unverified.{' '}
                                            <Link
                                                href={send()}
                                                as="button"
                                                className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                            >
                                                Click here to resend the
                                                verification email.
                                            </Link>
                                        </p>

                                        {status ===
                                            'verification-link-sent' && (
                                            <div className="mt-2 text-sm font-medium text-green-600">
                                                A new verification link has been
                                                sent to your email address.
                                            </div>
                                        )}
                                    </div>
                                )}

                            <div className="flex items-center gap-4">
                                <SubmitButton data-test="update-profile-button">
                                    Save
                                </SubmitButton>
                            </div>
                        </>
                    </Form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
