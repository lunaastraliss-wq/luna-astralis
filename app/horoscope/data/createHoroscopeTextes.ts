import __i18n from "../../../i18n/migrated/fr/app/horoscope/data/createhoroscopetextes.json";
import type {
  HoroscopeSigneData,
  HoroscopeTextes,
} from "./types";

export function createHoroscopeTextes(
  signe: HoroscopeSigneData
): HoroscopeTextes {
  return {
    energie: [
      `Une énergie de ${signe.qualite} accompagne votre journée. Avancez avec confiance, sans chercher à tout contrôler immédiatement.`,

      `La journée vous invite à miser sur votre ${signe.qualite}. Une décision simple pourrait clarifier une situation restée floue.`,

      `Votre nature ${signe.element.toLowerCase()} vous aide à retrouver votre élan. Écoutez ce qui vous semble juste avant d’agir.`,

      __i18n["un_changement_de_rythme_pourrait_vous_etre_benefique_aujourd"],

      __i18n["votre_energie_evolue_progressivement_au_fil_de_la_journee_pr"],

      __i18n["une_nouvelle_perspective_pourrait_vous_aider_a_comprendre_un"],

      `La journée favorise les gestes simples et les décisions cohérentes. Votre ${signe.qualite} peut vous aider à avancer avec assurance.`,

      __i18n["vous_pourriez_ressentir_le_besoin_de_revenir_a_l_essentiel_n"],

      __i18n["une_energie_plus_lumineuse_vous_accompagne_aujourd_hui_profi"],

      __i18n["votre_sensibilite_aux_ambiances_sera_plus_forte_choisissez_s"],
    ],

    amour: [
      __i18n["les_echanges_gagnent_a_rester_simples_et_sinceres_une_parole"],

      __i18n["prenez_le_temps_d_ecouter_avant_de_repondre_la_douceur_favor"],

      __i18n["une_belle_occasion_de_creer_de_la_complicite_pourrait_se_pre"],

      __i18n["votre_vie_affective_demande_de_la_presence_plus_que_de_grand"],

      __i18n["une_discussion_honnete_pourrait_dissiper_un_doute_exprimez_v"],

      __i18n["une_personne_pourrait_vous_surprendre_par_son_attention_ou_s"],

      __i18n["vous_pourriez_ressentir_le_besoin_d_etre_rassure_evitez_tout"],

      __i18n["une_energie_de_rapprochement_favorise_les_echanges_celibatai"],

      __i18n["votre_intuition_relationnelle_sera_particulierement_forte_fa"],

      __i18n["l_harmonie_passe_aujourd_hui_par_un_equilibre_entre_proximit"],
    ],

    travail: [
      __i18n["une_tache_qui_semblait_lourde_pourrait_avancer_plus_facileme"],

      __i18n["votre_concentration_sera_votre_meilleure_alliee_evitez_de_di"],

      __i18n["une_idee_merite_d_etre_notee_ou_partagee_elle_pourrait_deven"],

      __i18n["le_climat_favorise_les_ajustements_intelligents_corrigez_ce"],

      __i18n["une_conversation_professionnelle_pourrait_vous_aider_a_mieux"],

      __i18n["vous_pourriez_recevoir_une_information_utile_prenez_le_temps"],

      __i18n["votre_constance_portera_davantage_ses_fruits_que_la_precipit"],

      __i18n["une_responsabilite_supplementaire_pourrait_se_presenter_veri"],

      __i18n["une_solution_plus_simple_pourrait_remplacer_une_methode_deve"],

      __i18n["votre_travail_pourrait_etre_remarque_aujourd_hui_restez_prof"],
    ],

    finances: [
      __i18n["la_prudence_reste_preferable_pour_les_depenses_impulsives_ve"],

      __i18n["une_meilleure_organisation_de_vos_depenses_pourrait_vous_app"],

      __i18n["evitez_les_decisions_prises_sous_le_coup_de_l_emotion_une_co"],

      __i18n["la_journee_convient_davantage_a_la_planification_qu_aux_gran"],

      __i18n["une_petite_economie_realisee_aujourd_hui_pourrait_devenir_pl"],

      __i18n["vous_pourriez_etre_tente_de_vous_offrir_quelque_chose_pour_c"],

      __i18n["un_detail_administratif_ou_financier_merite_votre_attention"],

      __i18n["la_stabilite_financiere_passe_aujourd_hui_par_la_moderation"],

      __i18n["une_discussion_concernant_l_argent_gagnerait_a_etre_claire_e"],

      __i18n["votre_intuition_peut_vous_alerter_sur_une_depense_ou_une_pro"],
    ],

    bienEtre: [
      __i18n["votre_corps_pourrait_reclamer_un_rythme_plus_regulier_hydrat"],

      __i18n["accordez_vous_quelques_minutes_de_calme_pour_relacher_la_ten"],

      __i18n["une_activite_simple_a_l_exterieur_pourrait_vous_aider_a_retr"],

      __i18n["respectez_vos_limites_sans_culpabilite_votre_equilibre_depen"],

      __i18n["une_routine_legere_pourrait_vous_faire_beaucoup_de_bien_evit"],

      __i18n["votre_energie_pourrait_varier_selon_les_moments_adaptez_votr"],

      __i18n["un_moment_loin_des_ecrans_vous_aiderait_a_retrouver_davantag"],

      __i18n["votre_bien_etre_passe_aujourd_hui_par_des_choix_simples_resp"],

      __i18n["une_tension_emotionnelle_pourrait_se_manifester_physiquement"],

      __i18n["vous_pourriez_beneficier_d_un_environnement_plus_calme_accor"],
    ],

    conseil: [
      __i18n["faites_aujourd_hui_un_pas_concret_plutot_que_d_attendre_le_m"],

      __i18n["choisissez_ce_qui_vous_apporte_de_la_clarte_pas_ce_qui_nourr"],

      __i18n["ne_sous_estimez_pas_la_puissance_d_une_decision_calme_et_ref"],

      __i18n["votre_intuition_peut_vous_guider_mais_prenez_aussi_le_temps"],

      __i18n["ne_depensez_pas_votre_energie_a_convaincre_les_personnes_qui"],

      __i18n["ce_qui_avance_lentement_peut_tout_de_meme_avancer_dans_la_bo"],

      __i18n["une_limite_clairement_exprimee_vaut_mieux_qu_un_silence_remp"],

      __i18n["faites_confiance_a_ce_que_vous_ressentez_sans_laisser_la_peu"],

      __i18n["donnez_votre_attention_a_ce_que_vous_pouvez_reellement_ameli"],

      __i18n["vous_n_avez_pas_besoin_de_tout_comprendre_immediatement_pour"],
    ],
  };
}
