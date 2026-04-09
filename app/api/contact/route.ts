import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Envoyer l'email
    const data = await resend.emails.send({
      from: 'Contact Savoir Faire Swiss <lesavoirfaireswiss@gmail.com>', // Remplacez par votre domaine vérifié
      to: ['lesavoirfaireswiss@gmail.com'], // Remplacez par votre adresse Gmail
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #EDF4DB; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #2f2912; margin: 0 0 20px 0; font-size: 24px;">
              Nouveau message de contact
            </h2>
            <div style="background-color: white; padding: 20px; border-radius: 6px;">
              <h3 style="color: #2f2912; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #7D9395; padding-bottom: 10px;">
                Informations du contact
              </h3>
              <p style="margin: 10px 0; color: #4a4a4a;">
                <strong style="color: #2f2912;">Nom :</strong> ${name}
              </p>
              <p style="margin: 10px 0; color: #4a4a4a;">
                <strong style="color: #2f2912;">Email :</strong> 
                <a href="mailto:${email}" style="color: #7D9395; text-decoration: none;">${email}</a>
              </p>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #7D9395;">
            <h3 style="color: #2f2912; margin: 0 0 15px 0; font-size: 18px;">
              Message
            </h3>
            <div style="background-color: white; padding: 20px; border-radius: 6px; line-height: 1.6; color: #4a4a4a;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">
              Ce message a été envoyé depuis le site web Savoir Faire Swiss
            </p>
            <p style="margin: 10px 0 0 0; font-size: 14px;">
              Répondre directement à <a href="mailto:${email}" style="color: #7D9395;">${email}</a>
            </p>
          </div>
        </div>
      `,
      text: `
        Nouveau message de contact

        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        ---
        Ce message a été envoyé depuis le site web Savoir Faire Swiss
      `
    });

    return NextResponse.json({ 
      message: 'Email envoyé avec succès',
      id: data.data?.id 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
