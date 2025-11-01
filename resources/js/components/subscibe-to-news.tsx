import { Button } from '@/components/ui/button';
import { Form } from '@wandry/inertia-form';
import { Mail, SendHorizonal } from 'lucide-react';
import TextField from './text-field';

export default function SubscribeToNews() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
                        Subscribe to our newsletter
                    </h2>
                    <p className="mt-4">
                        Stay updated with the latest news, updates, and
                        exclusive offers. Join our newsletter and never miss
                        out!
                    </p>

                    <Form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
                        <div className="relative grid grid-cols-[1fr_auto] items-center gap-x-4 rounded-[calc(var(--radius)+0.75rem)] shadow shadow-zinc-950/5 has-[input:focus]:ring-2 has-[input:focus]:ring-muted">
                            <TextField
                                addonLeft={
                                    <Mail className="size-5 text-muted-foreground" />
                                }
                                name="email"
                                placeholder="Your mail address"
                                classes={{
                                    input: 'h-14 w-full pl-12 focus:outline-none',
                                }}
                                type="email"
                            />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button
                                    type="submit"
                                    aria-label="submit"
                                    className="rounded-(--radius)"
                                >
                                    <span className="hidden md:block">
                                        Subscribe
                                    </span>
                                    <SendHorizonal
                                        className="relative mx-auto size-5 md:hidden"
                                        strokeWidth={2}
                                    />
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}
