<template>
  <div class="about">
    <form method="post" action="https://demo.library.edu.ink/cgi-bin/koha/tools/import_borrowers.pl" enctype="multipart/form-data">
      <fieldset class="rows">
        <legend>Import into the borrowers table</legend>

        <ol>
          <li>
            <label for="uploadborrowers">Select the file to import: </label>
            <input type="file" id="uploadborrowers" name="uploadborrowers" />
          </li>

          <li>
            <label for "createpatronlist">Create patron list: </label>
            <input name="createpatronlist" id="createpatronlist" value="1" type="checkbox">
            <span class="hint">List name will be file name with timestamp</span>
          </li>
        </ol>
      </fieldset>

      <fieldset class="rows">
        <legend>Field to use for record matching</legend>
        <ol>
          <li class="radio">
            <select name="matchpoint" id="matchpoint">
              <option value="cardnumber">Cardnumber</option>
              <option value="userid">Username</option>

            </select>
          </li>
        </ol>
      </fieldset>

      <fieldset class="rows">
        <legend>Default values</legend>

        <ol>

          <li>
            <label class="description" for="title">Salutation: </label>
            <input id="title" name="title" />
            <span class="field_hint">title</span>
          </li>

          <li>
            <label class="description" for="surname">Surname: </label>
            <input id="surname" name="surname" />
            <span class="field_hint">surname</span>
          </li>

          <li>
            <label class="description" for="firstname">First name: </label>
            <input id="firstname" name="firstname" />
            <span class="field_hint">firstname</span>
          </li>

          <li>
            <label class="description" for="dateofbirth">Date of birth: </label>
            <input id="dateofbirth" name="dateofbirth" />
            <span class="field_hint">dateofbirth</span>
          </li>

          <li>
            <label class="description" for="initials">Initials: </label>
            <input id="initials" name="initials" />
            <span class="field_hint">initials</span>
          </li>

          <li>
            <label class="description" for="othernames">Other name: </label>
            <input id="othernames" name="othernames" />
            <span class="field_hint">othernames</span>
          </li>

          <li>
            <label class="description" for="sex">Gender: </label>
            <input id="sex" name="sex" />
            <span class="field_hint">sex</span>
          </li>

          <li>
            <label class="description" for="relationship">Relationship: </label>
            <input id="relationship" name="relationship" />
            <span class="field_hint">relationship</span>
          </li>

          <li>
            <label class="description" for="guarantorid">Guarantor borrower number: </label>
            <input id="guarantorid" name="guarantorid" />
            <span class="field_hint">guarantorid</span>
          </li>

          <li>
            <label class="description" for="streetnumber">Street number: </label>
            <input id="streetnumber" name="streetnumber" />
            <span class="field_hint">streetnumber</span>
          </li>

          <li>
            <label class="description" for="streettype">Street type: </label>
            <input id="streettype" name="streettype" />
            <span class="field_hint">streettype</span>
          </li>

          <li>
            <label class="description" for="address">Address: </label>
            <input id="address" name="address" />
            <span class="field_hint">address</span>
          </li>

          <li>
            <label class="description" for="address2">Address 2: </label>
            <input id="address2" name="address2" />
            <span class="field_hint">address2</span>
          </li>

          <li>
            <label class="description" for="city">City: </label>
            <input id="city" name="city" />
            <span class="field_hint">city</span>
          </li>

          <li>
            <label class="description" for="state">State: </label>
            <input id="state" name="state" />
            <span class="field_hint">state</span>
          </li>

          <li>
            <label class="description" for="zipcode">ZIP/Postal code: </label>
            <input id="zipcode" name="zipcode" />
            <span class="field_hint">zipcode</span>
          </li>

          <li>
            <label class="description" for="country">Country: </label>
            <input id="country" name="country" />
            <span class="field_hint">country</span>
          </li>

          <li>
            <label class="description" for="phone">Primary phone: </label>
            <input id="phone" name="phone" />
            <span class="field_hint">phone</span>
          </li>

          <li>
            <label class="description" for="phonepro">Secondary phone: </label>
            <input id="phonepro" name="phonepro" />
            <span class="field_hint">phonepro</span>
          </li>

          <li>
            <label class="description" for="mobile">Other phone: </label>
            <input id="mobile" name="mobile" />
            <span class="field_hint">mobile</span>
          </li>

          <li>
            <label class="description" for="email">Primary email: </label>
            <input id="email" name="email" />
            <span class="field_hint">email</span>
          </li>

          <li>
            <label class="description" for="emailpro">Secondary email: </label>
            <input id="emailpro" name="emailpro" />
            <span class="field_hint">emailpro</span>
          </li>

          <li>
            <label class="description" for="fax">Fax: </label>
            <input id="fax" name="fax" />
            <span class="field_hint">fax</span>
          </li>

          <li>
            <label class="description" for="B_streetnumber">Alternate address: Street number: </label>
            <input id="B_streetnumber" name="B_streetnumber" />
            <span class="field_hint">B_streetnumber</span>
          </li>

          <li>
            <label class="description" for="B_streettype">Alternate address: Street type: </label>
            <input id="B_streettype" name="B_streettype" />
            <span class="field_hint">B_streettype</span>
          </li>

          <li>
            <label class="description" for="B_address">Alternate address: Address: </label>
            <input id="B_address" name="B_address" />
            <span class="field_hint">B_address</span>
          </li>

          <li>
            <label class="description" for="B_address2">Alternate address: Address 2: </label>
            <input id="B_address2" name="B_address2" />
            <span class="field_hint">B_address2</span>
          </li>

          <li>
            <label class="description" for="B_city">Alternate address: City: </label>
            <input id="B_city" name="B_city" />
            <span class="field_hint">B_city</span>
          </li>

          <li>
            <label class="description" for="B_state">Alternate address: State: </label>
            <input id="B_state" name="B_state" />
            <span class="field_hint">B_state</span>
          </li>

          <li>
            <label class="description" for="B_zipcode">Alternate address: ZIP/Postal code: </label>
            <input id="B_zipcode" name="B_zipcode" />
            <span class="field_hint">B_zipcode</span>
          </li>

          <li>
            <label class="description" for="B_country">Alternate address: Country: </label>
            <input id="B_country" name="B_country" />
            <span class="field_hint">B_country</span>
          </li>

          <li>
            <label class="description" for="B_phone">Alternate address: Phone: </label>
            <input id="B_phone" name="B_phone" />
            <span class="field_hint">B_phone</span>
          </li>

          <li>
            <label class="description" for="B_email">Alternate address: Email: </label>
            <input id="B_email" name="B_email" />
            <span class="field_hint">B_email</span>
          </li>

          <li>
            <label class="description" for="contactnote">Alternate contact: Note: </label>
            <input id="contactnote" name="contactnote" />
            <span class="field_hint">contactnote</span>
          </li>

          <li>
            <label class="description" for="altcontactfirstname">Alternate contact: First name: </label>
            <input id="altcontactfirstname" name="altcontactfirstname" />
            <span class="field_hint">altcontactfirstname</span>
          </li>

          <li>
            <label class="description" for="altcontactsurname">Alternate contact: Surname: </label>
            <input id="altcontactsurname" name="altcontactsurname" />
            <span class="field_hint">altcontactsurname</span>
          </li>

          <li>
            <label class="description" for="altcontactaddress1">Alternate contact: Address: </label>
            <input id="altcontactaddress1" name="altcontactaddress1" />
            <span class="field_hint">altcontactaddress1</span>
          </li>

          <li>
            <label class="description" for="altcontactaddress2">Alternate contact: Address 2: </label>
            <input id="altcontactaddress2" name="altcontactaddress2" />
            <span class="field_hint">altcontactaddress2</span>
          </li>

          <li>
            <label class="description" for="altcontactaddress3">Alternate contact: City: </label>
            <input id="altcontactaddress3" name="altcontactaddress3" />
            <span class="field_hint">altcontactaddress3</span>
          </li>

          <li>
            <label class="description" for="contactname">Alternate contact: Surname: </label>
            <input id="contactname" name="contactname" />
            <span class="field_hint">contactname</span>
          </li>

          <li>
            <label class="description" for="contactfirstname">Alternate contact: First name: </label>
            <input id="contactfirstname" name="contactfirstname" />
            <span class="field_hint">contactfirstname</span>
          </li>

          <li>
            <label class="description" for="contacttitle">Alternate contact: Title: </label>
            <input id="contacttitle" name="contacttitle" />
            <span class="field_hint">contacttitle</span>
          </li>

          <li>
            <label class="description" for="altcontactstate">Alternate contact: State: </label>
            <input id="altcontactstate" name="altcontactstate" />
            <span class="field_hint">altcontactstate</span>
          </li>

          <li>
            <label class="description" for="altcontactzipcode">Alternate contact: ZIP/Postal code: </label>
            <input id="altcontactzipcode" name="altcontactzipcode" />
            <span class="field_hint">altcontactzipcode</span>
          </li>

          <li>
            <label class="description" for="altcontactcountry">Alternate contact: Country: </label>
            <input id="altcontactcountry" name="altcontactcountry" />
            <span class="field_hint">altcontactcountry</span>
          </li>

          <li>
            <label class="description" for="altcontactphone">Alternate contact: Phone: </label>
            <input id="altcontactphone" name="altcontactphone" />
            <span class="field_hint">altcontactphone</span>
          </li>

          <li>
            <label class="description" for="cardnumber">Card number: </label>
            <input id="cardnumber" name="cardnumber" />
            <span class="field_hint">cardnumber</span>
          </li>

          <li>
            <label class="description" for="branchcode">Home library: </label>
            <select id="branchcode" name="branchcode">
              <option value="" selected="selected"></option>

              <option value="DMTC">Discovery Mind Kindergarten (TC)</option>

              <option value="DG">Dongguang</option>

            </select>
            <span class="field_hint">branchcode</span>
          </li>

          <li>
            <label class="description" for="categorycode">Patron category: </label>
            <select id="categorycode" name="categorycode">
              <option value="" selected="selected"></option>

              <option value="B">Board</option>

              <option value="HB">Home Bound</option>

              <option value="IL">Inter-Library Loan</option>

              <option value="J">Juvenile</option>

              <option value="K">Kid</option>

              <option value="L">Library</option>

              <option value="PT">Patron</option>

              <option value="SC">School</option>

              <option value="S">Staff</option>

              <option value="ST">Student</option>

              <option value="T">Teacher</option>

              <option value="YA">Young Adult</option>

            </select>
            <span class="field_hint">categorycode</span>
          </li>

          <li>
            <label class="description" for="sort1">Sort 1: </label>
            <input id="sort1" name="sort1" />
            <span class="field_hint">sort1</span>
          </li>

          <li>
            <label class="description" for="sort2">Sort 2: </label>
            <input id="sort2" name="sort2" />
            <span class="field_hint">sort2</span>
          </li>

          <li>
            <label class="description" for="dateenrolled">Registration date: </label>
            <input id="dateenrolled" name="dateenrolled" />
            <span class="field_hint">dateenrolled</span>
          </li>

          <li>
            <label class="description" for="dateexpiry">Expiry date: </label>
            <input id="dateexpiry" name="dateexpiry" />
            <span class="field_hint">dateexpiry</span>
          </li>

          <li>
            <label class="description" for="opacnote">OPAC note: </label>
            <input id="opacnote" name="opacnote" />
            <span class="field_hint">opacnote</span>
          </li>

          <li>
            <label class="description" for="borrowernotes">Circulation note: </label>
            <input id="borrowernotes" name="borrowernotes" />
            <span class="field_hint">borrowernotes</span>
          </li>

          <li>
            <label class="description" for="userid">Username: </label>
            <input id="userid" name="userid" />
            <span class="field_hint">userid</span>
          </li>

          <li>
            <label class="description" for="password">Password: </label>
            <input id="password" name="password" />
            <span class="field_hint">password</span>
          </li>

          <li>
            <label class="description" for="flags">System permissions: </label>
            <input id="flags" name="flags" />
            <span class="field_hint">flags</span>
          </li>

          <li>
            <label class="description" for="gonenoaddress">Gone no address flag: </label>
            <input id="gonenoaddress" name="gonenoaddress" />
            <span class="field_hint">gonenoaddress</span>
          </li>

          <li>
            <label class="description" for="lost">Lost card flag: </label>
            <input id="lost" name="lost" />
            <span class="field_hint">lost</span>
          </li>

          <li>
            <label class="description" for="debarred">Restricted [until] flag: </label>
            <input id="debarred" name="debarred" />
            <span class="field_hint">debarred</span>
          </li>

          <li>
            <label class="description" for="debarredcomment">Comment: </label>
            <input id="debarredcomment" name="debarredcomment" />
            <span class="field_hint">debarredcomment</span>
          </li>

          <li>
            <label class="description" for="smsalertnumber">Mobile phone number: </label>
            <input id="smsalertnumber" name="smsalertnumber" />
            <span class="field_hint">smsalertnumber</span>
          </li>

          <li>
            <label class="description" for="privacy">Privacy settings: </label>
            <input id="privacy" name="privacy" />
            <span class="field_hint">privacy</span>
          </li>

          <li>
            <label class="description" for="patron_attributes">Patron attributes: </label>
            <input id="patron_attributes" name="patron_attributes" />
            <span class="field_hint">patron_attributes</span>
          </li>

        </ol>
      </fieldset>

      <fieldset class="rows">
        <legend>If matching record is already in the borrowers table:</legend>

        <ol>
          <li class="radio">
            <input type="radio" id="overwrite_cardnumberno" name="overwrite_cardnumber" value="0" checked="checked" />
            <label for="overwrite_cardnumberno">Ignore this one, keep the existing one</label>
          </li>

          <li class="radio">
            <input type="radio" id="overwrite_cardnumberyes" name="overwrite_cardnumber" value="1" />
            <label for="overwrite_cardnumberyes">Overwrite the existing one with this</label>
          </li>
        </ol>
      </fieldset>

      <fieldset class="rows">
        <legend>Patron attributes</legend>

        <ol>
          <li class="radio">
            <input type="radio" id="ext_preserve_0" name="ext_preserve" value="0" checked="checked" />
            <label for="ext_preserve_0">Replace all patron attributes</label>
          </li>

          <li class="radio">
            <input type="radio" id="ext_preserve_1" name="ext_preserve" value="1" />
            <label for="ext_preserve_1">Replace only included patron attributes</label>
          </li>
        </ol>
      </fieldset>

      <fieldset class="action">
        <input type="hidden" name="csrf_token" value="3ef00c0e3f9fd8256d22aaab53d3ef07f4798393,e3b63ee647f23a044f17828c58e5efcf428b62eb,1535598546" />
        <input type="submit" value="Import" />
      </fieldset>
    </form>

  </div>
</template>
