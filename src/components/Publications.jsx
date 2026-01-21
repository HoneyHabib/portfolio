import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Publications() {
  return (
    <section className="py-24 bg-neutral-800/95" id="publications">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-14"
        >
          Publications
        </motion.h2>

        {/* Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-neutral-800/70
            border border-white/10
            rounded-xl
            p-8
            hover:border-rose-700
            transition
          "
        >
          {/* Title */}
          <h3 className="text-xl font-semibold text-white">
            Book Chapter <span className="text-red-400">[ Stock Price Prediction Using Artificial Intelligence Based on LSTM Deep Learning Model ]</span>
          </h3>

          {/* Meta */}
          <p className="mt-1 text-sm text-neutral-400">
            Published in [ Artificial Intelligence & Blockchain in Cyber Physical Systems
            Technologies & Applications ] · [ by CRC Press, 2023 ]
          </p>

          {/* Description */}
          <p className="mt-5 text-neutral-300 leading-relaxed max-w-[52rem]">
            Authored a technical book chapter focused on a research-backed implementation of LSTM-based deep learning models to predict stock price trends using real
            world financial data.
          </p>
            {/* Link */}
          <a
            href="https://www.routledge.com/Artificial-Intelligence--Blockchain-in-Cyber-Physical-Systems-Technologies--Applications/Arif-Balas-Nafis-FaseehQureshi-Wazir-Hussain/p/book/9781032040363"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 mt-6
              text-sm font-medium text-red-400
              hover:text-red-300 transition
            "
          >
            View Publication <FiExternalLink className="text-base" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
