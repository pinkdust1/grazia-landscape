
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Il nome deve avere almeno 2 caratteri" }),
  email: z.string().email({ message: "Email non valida" }),
  phone: z.string().min(6, { message: "Numero di telefono non valido" }),
  address: z.string().min(5, { message: "Indirizzo non valido" }),
});

const OrderForm: React.FC = () => {
  const [time, setTime] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Ordine inviato con successo! Ti contatteremo presto.");
    form.reset();
  }

  return (
    <section id="order-form" className="py-16 bg-magazine-gray">
      <div className="magazine-container">
        <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 shadow-lg rounded-lg border border-magazine-black/10">
          <div className="text-center mb-8">
            <span className="px-3 py-1 bg-magazine-yellow text-magazine-black text-xs uppercase tracking-wider font-medium inline-block mb-4">
              Offerta Speciale
            </span>
            <h2 className="text-3xl lg:text-4xl font-grazia font-bold mb-2">Ordina Keto Probiotix Ora</h2>
            <p className="text-lg mb-6">
              Con uno <span className="line-through">sconto del 50%</span> <span className="text-red-600 font-bold">solo per i lettori di Grazia</span>
            </p>
            
            <div className="flex justify-center items-center mb-2">
              <div className="flex items-center space-x-4">
                <div className="bg-magazine-black text-white font-bold text-2xl p-3 rounded">
                  {String(time.hours).padStart(2, '0')}
                </div>
                <span className="text-2xl font-bold">:</span>
                <div className="bg-magazine-black text-white font-bold text-2xl p-3 rounded">
                  {String(time.minutes).padStart(2, '0')}
                </div>
                <span className="text-2xl font-bold">:</span>
                <div className="bg-magazine-black text-white font-bold text-2xl p-3 rounded">
                  {String(time.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">L'offerta scade quando il timer arriva a zero</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="flex justify-center md:justify-start items-center mb-4">
                  <div className="text-4xl font-bold text-magazine-black">€29.99</div>
                  <div className="ml-2 flex flex-col items-start">
                    <span className="line-through text-gray-500">€59.99</span>
                    <span className="bg-magazine-yellow px-2 py-0.5 text-xs font-bold">-50%</span>
                  </div>
                </div>
                <p className="text-green-600 font-semibold mb-2">✓ Spedizione Gratuita</p>
                <p className="text-green-600 font-semibold mb-2">✓ Garanzia Soddisfatti o Rimborsati 30 Giorni</p>
                <p className="text-green-600 font-semibold">✓ Pagamento Sicuro</p>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Keto Probiotix bottle" 
                  className="mx-auto md:mx-0 max-w-[200px]"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Inserisci il tuo nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="La tua email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefono</FormLabel>
                        <FormControl>
                          <Input placeholder="Numero di telefono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Indirizzo di Spedizione</FormLabel>
                        <FormControl>
                          <Input placeholder="Il tuo indirizzo completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-magazine-yellow hover:bg-magazine-yellow/90 text-black font-bold py-3 text-base">
                    ORDINA ORA CON 50% DI SCONTO
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Cliccando su "Ordina Ora", accetti i nostri Termini e Condizioni e l'Informativa sulla Privacy
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
