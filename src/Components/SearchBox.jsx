import '../styles/SearchBox.scss';
import { BsSearch } from 'react-icons/bs';
import { SiGooglelens } from 'react-icons/si';
import { FiMic } from 'react-icons/fi';

export default function SearchBox() {
  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-box__items">
          <div className="search-box__items-input">
            <div className="section1">
              <BsSearch />
              <input type="text" placeholder="Search the Web" />
            </div>
            <div className="section2">
              <FiMic />
              <SiGooglelens />
            </div>
          </div>
          <div className="languages">
            <span>Languages:</span>
            <span>हिंदी</span>
            <span>বাংলা</span>
            <span>اردو</span>
            <span>ਪੰਜਾਬੀ</span>
            <span>मराठी</span>
            <span>తెలుగు</span>
            <span>தமிழ்</span>
            <span>ಕನ್ನಡ</span>
            <span>ગુજરાતી</span>
          </div>
        </div>
        <div className="space"> </div>
        {/* <div className="para">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam. Ad,
            suscipit. Nemo non nostrum, minus dolorem ratione at tenetur rem eaque accusantium
            inventore, quibusdam eos qui nam reprehenderit iusto. Quasi sint nam mollitia unde
            suscipit, ab ipsa numquam qui modi illo aperiam facere maxime repellendus? Non officia
            asperiores iure blanditiis, vitae quo dolores? Eveniet corrupti, obcaecati eligendi
            incidunt accusantium voluptates nulla in, minus velit, non exercitationem dolorum
            doloremque placeat blanditiis veniam sequi aliquam nostrum sint maiores. Repudiandae
            ullam beatae id quo temporibus sunt. Minus ipsam, nostrum, laudantium recusandae aut
            animi maxime temporibus rerum delectus, voluptates quisquam! Nostrum, hic commodi!
          </p>
        </div> */}
      </div>
    </div>
  );
}
